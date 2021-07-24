<?php


namespace App\Controller\Admin;


use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AdminController
 * @package App\Controller\Admin
 */
class AdminController
{

    /**
     * @Route("/%admin_route%/login", name="admin_login")
     */
    public function login()
    {

    }

    /**
     * @Route("/%admin_route%/", name="admin_top")
     */
    public function index()
    {

    }

}