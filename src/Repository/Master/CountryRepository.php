<?php


namespace App\Repository\Master;


use App\Entity\Master\Country;
use App\Repository\AbstractRepository;
use Doctrine\Persistence\ManagerRegistry;

class CountryRepository extends AbstractRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Country::class);
    }
}