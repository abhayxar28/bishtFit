import BlogCard from '@/components/blogs/BlogCard'
import Contact from '@/components/contact/Contact'
import Navbar from '@/components/navbar/Navbar'

export default function Blogs(){
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <BlogCard />
            </div>
            <div className='mt-90'>
                <section id="book-session-section">
                    <Contact />
                </section>
            </div> 
        </div>
    )
}