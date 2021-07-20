<?php


namespace App\Repository;


use App\Entity\AbstractEntity;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\ORMException;

abstract class AbstractRepository extends ServiceEntityRepository
{
    /**
     * @param AbstractEntity $entity
     * @throws ORMException
     */
    public function delete(AbstractEntity $entity)
    {
       $this->getEntityManager()->remove($entity);
    }

    /**
     * @param AbstractEntity $entity
     * @throws ORMException
     */
    public function save(AbstractEntity $entity)
    {
        $this->getEntityManager()->persist($entity);
    }

}