<?php

namespace App\Controller\Front;

use App\Form\ContactType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    /**
     * @Route("/contact", name="contact")
     */
    public function index(Request $request, \Swift_Mailer $mailer): Response
    {
        $form = $this->createForm(ContactType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $contactFormData = $form->getData();

            $message = (new \Swift_Message('Nouveau message de Otoktone.fr'))
                // On attribue l'expéditeur
                ->setFrom($contactFormData['mail'])
                // On attribue le destinataire
                ->setTo('alexandre.desmot@gmail.com')
                // On crée le texte avec la vue
                ->setBody(
                    $this->renderView(
                        'emails/email.html.twig', compact('contactFormData')
                    ),
                    'text/html'
                )
            ;

            $mailer->send($message);

            $this->addFlash('success', 'Message envoyé !');

            return $this->redirectToRoute('contact');
        }

        return $this->render('front/contact.html.twig', [
            'contact_form' => $form->createView(),
        ]);
    }
}
