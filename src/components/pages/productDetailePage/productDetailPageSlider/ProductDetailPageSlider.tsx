import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ProductListContext } from '../../../siteSetting/SiteSetting';

function ProductDetailPageSlider() {
    const productListX = useContext(ProductListContext)
    
    let params = useParams()
    return (
        <div className='w-full h-full'>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper: any) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="  pl-[16px] pr-[16px]">
                        <img className="w-full h-full" src={productListX?.productList.find(item => item?.id === params.id)?.image[0]} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="  pl-[16px] pr-[16px]">
                        <img className="w-full h-full" src={productListX?.productList.find(item => item?.id === params.id)?.image[1]} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="  pl-[16px] pr-[16px]">
                        <img className="w-full h-full" src={productListX?.productList.find(item => item?.id === params.id)?.image[2]} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default ProductDetailPageSlider;