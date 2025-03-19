import ContactCard from '@/components/ContactCard';
import MenuBar from '../../components/MenuBar';

export default function Contact() {
  return (
    <>
      <div className="wrapper p-[16px] flex flex-col">
        <h1>Contact</h1>
        <ContactCard name="Archawit" description="Industrial Student" imageUrl="https://avatar.iran.liara.run/publictest?=1"/>
        <ContactCard name="Samila" description="Urban Architecture Student" imageUrl="https://avatar.iran.liara.run/publictest?=1"/>
        <ContactCard name="Lookpuen" description="Thai Architecture Student" imageUrl="https://avatar.iran.liara.run/publictest?=1"/>
        <ContactCard name="Alan" description="Industrial Student" imageUrl="https://avatar.iran.liara.run/publictest?=1"/>
      </div>
    </>
  );
}