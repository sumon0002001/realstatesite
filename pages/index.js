import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <div className={styles.container}>
     <Box bg='tomato' w='100%' p={4} color='white'>
  This is the Box
</Box>
     
    </div>
  )
}
