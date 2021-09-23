<?php


namespace App\Entity;


use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\InheritanceType;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\Table;

#[Entity]
#[Table(name: "d_join_skill")]
#[InheritanceType("SINGLE_TABLE")]
class JoinSkill extends AbstractEntity
{
    #[Id]
    #[Column(name: "join_id", type: "integer", options: ["unsigned" => true])]
    #[GeneratedValue(strategy: "NONE")]
    private int $join_id;

    #[Id]
    #[Column(name: "skill_id", type: "integer", options: ["unsigned" => true])]
    #[GeneratedValue(strategy: "NONE")]
    private int $skill_id;

    #[ManyToOne(targetEntity: "Join", inversedBy: "JoinSkills")]
    #[JoinColumn(name: "join_id", referencedColumnName: "id")]
    private Join $Join;

    #[ManyToOne(targetEntity: "Skill", inversedBy: "JoinSkills")]
    #[JoinColumn(name: "skill_id", referencedColumnName: "id")]
    private Skill $Skill;

    /**
     * @return int
     */
    public function getJoinId(): int
    {
        return $this->join_id;
    }

    /**
     * @param int $join_id
     */
    public function setJoinId(int $join_id): void
    {
        $this->join_id = $join_id;
    }

    /**
     * @return int
     */
    public function getSkillId(): int
    {
        return $this->skill_id;
    }

    /**
     * @param int $skill_id
     */
    public function setSkillId(int $skill_id): void
    {
        $this->skill_id = $skill_id;
    }

    /**
     * @return Join
     */
    public function getJoin(): Join
    {
        return $this->Join;
    }

    /**
     * @param Join $Join
     */
    public function setJoin(Join $Join): void
    {
        $this->Join = $Join;
    }

    /**
     * @return Skill
     */
    public function getSkill(): Skill
    {
        return $this->Skill;
    }

    /**
     * @param Skill $Skill
     */
    public function setSkill(Skill $Skill): void
    {
        $this->Skill = $Skill;
    }
}