<?php


namespace App\Controller\Admin\Member;


use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ProjectController
 * @package App\Controller\Admin\Member
 */
class ProjectController
{
    #[Route(path: '/%admin_route%/project', name: 'admin_project')]
    public function index()
    {

    }

}