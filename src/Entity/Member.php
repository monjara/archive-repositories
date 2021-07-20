<?php


namespace App\Entity;


use DateTime;
use Doctrine\ORM\Mapping as ORM;


/**
 * Class Member
 *
 * @ORM\Table(name="d_member")
 * @ORM\InheritanceType("SINGLE_TABLE")
 * @ORM\Entity(repositoryClass="Repository\MemberRepository")
 * @package App\Entity
 */
class Member
{
    /**
     * @var int
     *
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     * @ORM\Column(name="id", type="integer", options={"unsigned":true})
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name01", type="string", length="255")
     */
    private $name01;

    /**
     * @var string
     *
     * @ORM\Column(name="name02", type="string", length="255")
     */
    private $name02;

    /**
     * @var string
     *
     * @ORM\Column(name="kana01", type="string", length="255")
     */
    private $kana01;

    /**
     * @var string
     *
     * @ORM\Column(name="kana02", type="string", length="255")
     */
    private $kana02;

    /**
     * @var string|null
     *
     * @ORM\Column(name="postal_code", type="string", length=8, nullable=true)
     */
    private $postal_code;

    /** * @var string|null
     *
     * @ORM\Column(name="address01", type="string", length=255, nullable=true)
     */
    private $address01;

    /**
     * @var string|null
     *
     * @ORM\Column(name="address02", type="string", length=255, nullable=true)
     */
    private $address02;

    /**
     * @var string|null
     *
     * @ORM\Column(name="email", type="string", length=255, nullable=true)
     */
    private $email;

    /**
     * @var string|null
     *
     * @ORM\Column(name="phone_number", type="string", length=14, nullable=true)
     */
    private $phone_number;

    /**
     * @var string|null
     *
     * @ORM\Column(name="closest_station", type="string", length=255, nullable=true)
     */
    private $closest_station;

    /**
     * @var string|null
     *
     * @ORM\Column(name="note", type="string", length="4000", nullable=true)
     */
    private $note;

    /**
     * @var DateTime
     *
     * @ORM\Column(name="create_date", type="datetimetz")
     */
    private $create_date;

    /**
     * @var DateTime
     *
     * @ORM\Column(name="update_date", type="datetimetz")
     */
    private $update_date;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getName01(): string
    {
        return $this->name01;
    }

    /**
     * @param string $name01
     */
    public function setName01(string $name01): void
    {
        $this->name01 = $name01;
    }

    /**
     * @return string
     */
    public function getName02(): string
    {
        return $this->name02;
    }

    /**
     * @param string $name02
     */
    public function setName02(string $name02): void
    {
        $this->name02 = $name02;
    }

    /**
     * @return string
     */
    public function getKana01(): string
    {
        return $this->kana01;
    }

    /**
     * @param string $kana01
     */
    public function setKana01(string $kana01): void
    {
        $this->kana01 = $kana01;
    }

    /**
     * @return string
     */
    public function getKana02(): string
    {
        return $this->kana02;
    }

    /**
     * @param string $kana02
     */
    public function setKana02(string $kana02): void
    {
        $this->kana02 = $kana02;
    }

    /**
     * @return string|null
     */
    public function getPostalCode(): ?string
    {
        return $this->postal_code;
    }

    /**
     * @param string|null $postal_code
     */
    public function setPostalCode(?string $postal_code): void
    {
        $this->postal_code = $postal_code;
    }

    /**
     * @return string|null
     */
    public function getAddress01(): ?string
    {
        return $this->address01;
    }

    /**
     * @param string|null $address01
     */
    public function setAddress01(?string $address01): void
    {
        $this->address01 = $address01;
    }

    /**
     * @return string|null
     */
    public function getAddress02(): ?string
    {
        return $this->address02;
    }

    /**
     * @param string|null $address02
     */
    public function setAddress02(?string $address02): void
    {
        $this->address02 = $address02;
    }

    /**
     * @return string|null
     */
    public function getEmail(): ?string
    {
        return $this->email;
    }

    /**
     * @param string|null $email
     */
    public function setEmail(?string $email): void
    {
        $this->email = $email;
    }

    /**
     * @return string|null
     */
    public function getPhoneNumber(): ?string
    {
        return $this->phone_number;
    }

    /**
     * @param string|null $phone_number
     */
    public function setPhoneNumber(?string $phone_number): void
    {
        $this->phone_number = $phone_number;
    }

    /**
     * @return string|null
     */
    public function getClosestStation(): ?string
    {
        return $this->closest_station;
    }

    /**
     * @param string|null $closest_station
     */
    public function setClosestStation(?string $closest_station): void
    {
        $this->closest_station = $closest_station;
    }

    /**
     * @return string|null
     */
    public function getNote(): ?string
    {
        return $this->note;
    }

    /**
     * @param string|null $note
     */
    public function setNote(?string $note): void
    {
        $this->note = $note;
    }

    /**
     * @return DateTime
     */
    public function getCreateDate(): DateTime
    {
        return $this->create_date;
    }

    /**
     * @param DateTime $create_date
     */
    public function setCreateDate(DateTime $create_date): void
    {
        $this->create_date = $create_date;
    }

    /**
     * @return DateTime
     */
    public function getUpdateDate(): DateTime
    {
        return $this->update_date;
    }

    /**
     * @param DateTime $update_date
     */
    public function setUpdateDate(DateTime $update_date): void
    {
        $this->update_date = $update_date;
    }

}