import BlogCard from '@/components/blogs/BlogCard'
import Contact from '@/components/contact/Contact'

export default function Blogs(){
    return (
        <div>
            <div>
                <BlogCard />
            </div>
            <div className='mt-10'>
                <section id="book-session-section">
                    <Contact />
                </section>
            </div> 
        </div>
    )
}