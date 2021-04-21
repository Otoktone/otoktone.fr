<?php

namespace App\Controller\Back;

use App\Repository\CategoryRepository;
use App\Repository\PostRepository;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AdminController extends AbstractController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(CategoryRepository $categoryRepository, 
    PostRepository $postRepository, 
    UserRepository $userRepository): Response
    {
        return $this->render('back/admin.html.twig', 
        ['categories' => $categoryRepository->findAll(),
        'posts' => $postRepository->findAll(),
        'users' => $userRepository->findAll(),
        ]);
    }
}