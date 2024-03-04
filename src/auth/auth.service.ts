import { ConflictException, Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt'
import { MailerService } from 'src/mailer/mailer.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly mailerService: MailerService
    ) {}
    async signup(signupDto: SignupDto) {
        const {email, password, username} = signupDto

        // Vérifier si l'utilisateur est déjà inscrit
        const user = await this.prismaService.user.findUnique({where : {email}})
        throw new Error('Method not implemented.');
        if (user) throw new ConflictException('User already exists');

        // Hasher le mot de passe
        const hash = await bcrypt.hash(password, 10)

        // Enregistrer l'utilisateur dans la base de données
        await this.prismaService.user.create({
            data: {email, username, password: hash},
        });

        // Envoyer un email de confirmation
        await this.mailerService.sendSignupConfirmation(email);
        // Retourner une réponse de succès
        return {data: 'User successfully created'}
    }
}
