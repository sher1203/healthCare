import Image from "next/image";
import { Button } from '@/components/ui/button';
import PatientForm from "@/components/ui/forms/PatientForm";
import Link from 'next/link';
import PasskeyModal from "@/components/ui/PasskeyModal";


export default function Home({searchParams}: SearchParamProps) {
  const isAdmin = searchParams.admin === 'true';

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal/> }
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src='/assets/icons/logo-full.svg'
            height={1000}
            width = {1000}
            alt='patient'
            className="mb-12 h-10 w-fit"
          />

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image 
        src='/assets/images/onboarding-img.png'
        height={1000}
        width={1000}
        alt ='patient'
        className="side-img max-w-[50%]"

      />
    </div>
    
  );
}
