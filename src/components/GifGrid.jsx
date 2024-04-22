import PropTypes from 'prop-types'

import GifItem from './GifItem'
import useFetchGifs from '../hooks/useFetchGifs'

const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <div className="loader" data-testid="loader"></div>
            }
            <div className='card-grid'>
                {images.map((image) => (
                    <GifItem key={image.id} {...image} />
                ))}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}

export default GifGrid
