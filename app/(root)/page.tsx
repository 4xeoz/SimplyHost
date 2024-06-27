
import React from 'react';
import { Button} from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';


const EmptyPage = () => {
    return (
        <>
        <section className='py-5 bg-contain bg-primary-50 bg-dotted-pattern md:py-5'>
            <div className="grid grid-cols-1 gap-5 wrapper md:grid-cols-2 2xl:gap-0">
                <div className="flex flex-col justify-center gap-8">
                    <h1 className="h1-bold">Host, Connect, Celebrate Your Events First Time In Algeria!!</h1>
                    <p className="p-regular-20 md:p-regular-24">Book and connect with other communities 
                    and peaople just like you shring the same intersts.</p>
                    <Button asChild className="w-full button sm:w-fit" size="lg">
                        <Link href="#events">Get Started</Link>
                    </Button>
                </div>
                <Image
                    src="/assets/images/hero.png"
                    alt="hero"
                    width={1000}
                    height={1000}
                    className='max-h-[70vh] object-contain object-center 2xl:max-[50vh]:'
                />

            </div>

        </section>

        <section id='events' className='flex flex-col gap-8 my-8 wrapper md:gap-12'>
            <h2 className='h2-bold'>Trusted by Thousands of Events</h2>
            <div className='flex flex-col w-full gap-5 md:flex-row'>
                Search 
                CategoryFilter
            </div>

        </section>
        </>
    );
};

export default EmptyPage;