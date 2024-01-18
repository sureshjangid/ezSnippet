import Link from 'next/link';
import { FC } from 'react';
import Button from '../ui/Button';
import { Instagram, Twitch, Twitter } from 'lucide-react';

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
    return (
        <div className="text-3xl flex flex-col font-bold text-highlight">
            Suresh Jangid
            <div className="text-sm font-thin flex justify-between items-center">
            @Suresh_jangid14

                <Link
                    className="block md:hidden"
                    href="https://twitter.com/Suresh_jangid14"
                    target='_blank'
                >
                    <Button variant="primary" sizes={'iconOnly'}>
                        <Twitter />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ProfileName;
