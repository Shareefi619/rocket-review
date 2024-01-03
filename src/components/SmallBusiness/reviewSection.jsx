import React from 'react'

const ReviewSection = () => {
    return (
        <>
            <section className='pt-28 pb-24 bg-white'>
                <div className='max-w-[1170px] w-full my-0 mx-auto py-0 px-8'>
                    <div className='flex flex-col'>
                        <div className='flex'>
                            <h1 className='text-6xl font-bold mb-28 text-black leading-5 text-center mx-auto lg:text-5xl md:text-4xl'>What people are saying about us</h1>
                        </div>
                        <div className='max-h-[450px] overflow-y-scroll py-0 px-5'>
                            <div>
                                <iframe
                                    id="review-widget-iframe-7"
                                    title="Review Widget"
                                    src="https://me.Rocket Review Tool.com/widget-app/review-widget/eyJhbGciOiJIUzI1NiJ9.eyJ0ZW5hbnQiOiJtZSIsImhvc3QiOiJtZS5yZXZpZXdzaGFrZS5jb20iLCJzdG9yZSI6MSwid2lkZ2V0Ijo3LCJpYXQiOjE2NjI1Mjg4MTR9.YAba1F8gmdMlKG9BDrGYczNoT3ZLuc_okusv8nl09Kw"
                                    allow="fullscreen"
                                    scrolling="no"
                                    data-lf-form-tracking-inspected-yegkb8lakmm7ep3z="true"
                                    data-lf-yt-playback-inspected-yegkb8lakmm7ep3z="true"
                                    data-lf-vimeo-playback-inspected-yegkb8lakmm7ep3z="true"
                                    style={{ width: "100%", border: 0, overflow: "hidden", height: 2491 }}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReviewSection