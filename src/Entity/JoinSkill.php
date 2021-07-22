<?php


namespace App\Entity;


use Doctrine\ORM\Mapping as ORM;

/**
 * Class JoinSkill
 * @package App\Entity
 *
 * @ORM\Table(name="d_join_skill")
 * @ORM\InheritanceType("SINGLE_TABLE")
 */
class JoinSkill extends AbstractEntity
{
    /**
     * @var integer
     * @ORM\Id
     * @ORM\Column(name="join_id", type="integer", options={"unsigned":true})
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $join_id;

    /**
     * @var integer
     * @ORM\Id
     * @ORM\Column(name="skill_id", type="integer", options={"unsigned":true})
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $skill_id;

    /**
     * @var Join
     * @ORM\ManyToOne(targetEntity="Entity\Join", inversedBy="JoinSkills")
     * @ORM\JoinColumns({
     *     @ORM\JoinColumn(name="join_id", referencedColumnName="id")
     * })
     */
    private $Join;

    /**
     * @var Skill
     * @ORM\ManyToOne(targetEntity="Entity\Skill", inversedBy="JoinSkills")
     * @ORM\JoinColumns({
     *     @ORM\JoinColumn(name="skill_id", referencedColumnName="id")
     * })
     */
    private $Skill;

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