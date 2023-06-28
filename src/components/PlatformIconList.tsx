import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import {
  SiApplearcade,
  SiAtari,
  SiD3Dotjs,
  SiNintendo,
  SiSega,
} from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

import { Platform } from '../entities/Platform';

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    web: BsGlobe,
    sega: SiSega,
    '3do': SiD3Dotjs,
    atari: SiAtari,
    'neo-geo': SiApplearcade,
  };

  return (
    <HStack marginY={1}>
      {platforms.map(platform => (
        <Icon as={iconMap[platform.slug]} color='gray.500' key={platform.id} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
