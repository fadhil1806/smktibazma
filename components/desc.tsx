import BlurFade from './magicui/blur-fade';
type DescriptionProps = {
    description: any
}
export default function Description({description} : DescriptionProps) {
    return (
        <desc>
            <BlurFade delay={0.25 * 2} inView>
                <div className='flex flex-col px-4 gap-4'>
                    {description}
                </div>
            </BlurFade>
        </desc>
    )
}