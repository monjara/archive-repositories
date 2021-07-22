<?php


namespace App\Entity\Master;


use Doctrine\ORM\Mapping as ORM;

/**
 * Class Sex
 * @package App\Entity\Master
 *
 * @ORM\Table(name="m_sex")
 * @ORM\InheritanceType("SINGLE_TABLE")
 */
class Sex extends AbstractMasterEntity
{

}