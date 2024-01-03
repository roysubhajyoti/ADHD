import {Fade,FadeIn, MoveOut,Move, ScrollContainer,Zoom, ScrollPage, Sticky,StickyIn, batch,Animator, ZoomIn, MoveIn} from 'react-scroll-motion'

const ZoomInScrollOut=batch(StickyIn(),FadeIn(),ZoomIn());
const FadeUp=batch(Fade(),Sticky(),Move())

function About() {
    return (
        <ScrollContainer className='bg-black text-green-300 font-sans font-bold m-0 p-0 text-5xl text-center flex-col justify-center items-center'>
            {/* this should be the root */}
            {/* ()er bhetore default center that is 50-50 */}
            <ScrollPage page={0}>
            <Animator animation={batch(Sticky(),Fade(),MoveOut(0,-200))}>
            <h2 >Welcome to SAMS </h2>
            </Animator>
            </ScrollPage>

            <ScrollPage page={1}>
            <Animator animation={ZoomInScrollOut}>
            <h2 className='text-green-400'>Thankyou for subscribing! </h2>
            </Animator>
            </ScrollPage>

            <ScrollPage page={2}>
            <Animator animation={FadeUp}>
            <h2 className='text-green-800'>Getting you started! </h2>
            </Animator>
            </ScrollPage>

            <ScrollPage page={3}>
                <div className='bg-green-800 font-sans m-0 p-0  font-semibold font-serif h-full text-xl'>
            <Animator animation={MoveIn(-1000,0)} >
            <h2 className='pt-4'>ebare ki likhbo </h2>
            </Animator>
            <Animator animation={MoveIn(1000,0)} >
            <h2 className='pt-6'>ki bolbo </h2>
            </Animator>
            <Animator animation={MoveIn(-1000,0)} >
            <h2 className='pt-8'>help gais </h2>
            </Animator>
            <Animator animation={MoveIn(1000,0)} >
            <h2 className='pt-10'>help gais 2 </h2>
            </Animator>
            <Animator animation={MoveIn(-1000,0)} >
            <h2 className='pt-10'>help gais 2 </h2>
            </Animator>
            <Animator animation={MoveIn(1000,0)} >
            <h2 className='pt-10'>help gais 2 </h2>
            </Animator>
            </div>
            </ScrollPage>

            <ScrollPage page={4}>
            <Animator animation={batch(Fade(),Sticky())}>
            <h2>done ig! </h2>
            </Animator>
            </ScrollPage>
        </ScrollContainer>
    )
}

export default About
