import { HiStar } from 'react-icons/hi'
import Img from '../../../public/12.jpg'
import Img1 from '../../../public/13.jpg'
import Img2 from '../../../public/14.jpg'
import Image from 'next/image'


export function Impact() {
  const testimonials = [
    {
      name: 'Amina Johnson',
      location: 'Harlem, New York',
      quote: 'The mentorship program didn\'t just help me with my studies – it opened doors I never knew existed. Today, I\'m a first-generation college graduate working in public health, giving back to the same community that lifted me up.',
      role: 'Program Graduate, 2019',
      avatar: Img1,
    },
    {
      name: 'Fatima El Mansouri',
      location: 'Marrakech, Morocco',
      quote: 'Through the women\'s cooperative program, I learned business skills that transformed my family\'s life. Now I employ twelve other women in our community, and we\'re expanding our artisan products to international markets.',
      role: 'Entrepreneur, 2021',
      avatar: Img2,
    },
  ]

  return (
    <section 
      id="impact" 
      className="section-padding relative bg-cover bg-center"
      style={{
        backgroundImage: ` url('${Img.src}')`
      }}
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stories of Impact
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Real stories from community members whose lives have been transformed 
            through our programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-semibold text-lg mr-4">
                  <Image className='rounded-full' src={testimonial?.avatar} alt="image" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center">
                <div className="flex text-primary-500 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="w-5 h-5" />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}