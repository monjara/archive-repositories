<?php


namespace App\Entity;


use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Class Skill
 * @package App\Entity
 *
 * @ORM\Table(name="d_skill")
 * @ORM\InheritanceType("SINGLE_TABLE")
 */
class Skill extends AbstractEntity
{
    /**
     * @var integer
     * @ORM\Id
     * @ORM\Column(name="id", type="integer", options={"unsigned":true})
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var Collection
     * @ORM\OneToMany(targetEntity="Entity\JoinSkills" mappedBy="skill", cascade={"persist", "remove"})
     */
    private $JoinSkills;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId(int $id): void
    {
        $this->id = $id;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * @return Collection
     */
    public function getJoinSkills(): Collection
    {
        return $this->JoinSkills;
    }

    /**
     * @param Collection $JoinSkills
     */
    public function setJoinSkills(Collection $JoinSkills): void
    {
        $this->JoinSkills = $JoinSkills;
    }

}