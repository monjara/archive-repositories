<?php


namespace App\Controller\Admin\Member;


use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MemberController
 * @package App\Controller\Admin\Member
 */
class MemberController
{
    #[Route(path: '/%admin_route%/member', name: 'admin_member')]
    public function index()
    {

    }

}