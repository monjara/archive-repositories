<?php


namespace App\Entity\Master;


use Doctrine\ORM\Mapping as ORM;

/**
 * Class Prefecture
 * @package App\Entity\Master
 *
 * @ORM\Table(name="m_prefecture")
 * @ORM\InheritanceType("SINGLE_TABLE")
 */
class Prefecture extends AbstractMasterEntity
{

}