import Marquee from '@/components/magicui/marquee'
import Image from 'next/image'
import { BorderBeam } from './magicui/border-beam'

const BuiltForYou = () => {
  return (
    <section className='relative flex h-[80vh] w-full flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h2 className='text-center text-4xl font-bold text-white'>Built for professionals like you.</h2>
        <p className='text-center text-lg text-gray-400'>Used by seriously productive people.</p>
      </div>
      <MarqueeDemo />
    </section>
  )
}

export default BuiltForYou

const ReviewCard = ({ img, name, username, body }: { img: string; name: string; username: string; body: string }) => {
  return (
    <figure className='relative w-64 cursor-pointer overflow-hidden rounded-xl bg-gray-300/[.10] p-4 hover:bg-gray-50/[.15]'>
      <div className='flex flex-row items-center gap-2'>
        <Image className='rounded-full' width={32} height={32} alt={username} src={img} />
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium text-white'>{name}</figcaption>
          <p className='text-xs font-medium text-white/40'>{username}</p>
        </div>
      </div>
      <p className='mt-2 text-sm text-white/70'>{body}</p>
      <BorderBeam duration={Math.random() * 20 + 1} delay={9} />
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <div className='relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden'>
      <Marquee pauseOnHover className='[--duration:20s]'>
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className='[--duration:20s]'>
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  )
}

const reviews = [
  {
    name: 'Jack',
    username: '@jack',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: 'https://avatar.vercel.sh/jack',
  },
  {
    name: 'Alex',
    username: '@alex',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://avatar.vercel.sh/Alex',
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/john',
  },
  {
    name: 'Bhavana',
    username: '@bhavana',
    body: "I'm speechless.",
    img: 'https://avatar.vercel.sh/Bhavana',
  },
  {
    name: 'Katie',
    username: '@katies',
    body: 'I enjoy the product. One-place tool for notes.',
    img: 'https://avatar.vercel.sh/katie',
  },
  {
    name: 'Peter',
    username: '@peter',
    body: "Fast and reliable. I'm very happy with the product.",
    img: 'https://avatar.vercel.sh/peter',
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)
