<?php


namespace App\Repository;


use App\Entity\Member;
use Doctrine\Persistence\ManagerRegistry;

class MemberRepository extends AbstractRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Member::class);
    }
}