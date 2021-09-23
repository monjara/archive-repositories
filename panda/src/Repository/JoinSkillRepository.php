<?php


namespace App\Repository;


use App\Entity\JoinSkill;
use Doctrine\Persistence\ManagerRegistry;

class JoinSkillRepository extends AbstractRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, JoinSkill::class);
    }
}