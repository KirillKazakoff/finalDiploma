import React from 'react';
import SocialLink from './SocialLink';
import SvgYoutube from '../Svg/Socials/SvgYoutube';
import SvgLinkedIn from '../Svg/Socials/SvgLinkedIn';
import SvgGoogle from '../Svg/Socials/SvgGoogle';
import SvgFacebook from '../Svg/Socials/SvgFacebook';
import SvgTwitter from '../Svg/Socials/SvgTwitter';

export default function FooterSocials() {
    return (
        <div className='socials'>
            <h2 className='footer-subtitle'>Подписывайтесь на нас</h2>

            <ul className='socials-list'>
                <SocialLink href='/#'>
                    <SvgYoutube height={28} />
                </SocialLink>
                <SocialLink href='/#'>
                    <SvgLinkedIn height={28} />
                </SocialLink>
                <SocialLink href='/#'>
                    <SvgGoogle height={28} />
                </SocialLink>
                <SocialLink href='/#'>
                    <SvgFacebook height={28} />
                </SocialLink>
                <SocialLink href='/#'>
                    <SvgTwitter height={28} />
                </SocialLink>
            </ul>
        </div>
    );
}
