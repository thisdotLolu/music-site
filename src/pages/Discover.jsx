import { genres } from '../assets/constants';
import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';




const Discover = () => {
    const {data, isFetching,error}= useGetTopChartsQuery();
    const genreTitle = 'Pop'
    // console.log(data)
    if(isFetching) return <Loader></Loader>
    return(
    <div className='flex flex-col'>
        <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
            <h2 className='font-bold text-3xl text-white text-left'>Discover {genreTitle}</h2>
            <select
            onChange={()=>{
                
            }}
            value=''
            className='bg-black text-gray-300 p-3 text-md rounded-lg outline-none sm:mt-0 mt-5'>
                {genres.map((genre)=>{
                    return(
                    <option 
                    value={genre.value}
                    key={genre.value}>
                        {genre.title}
                    </option>
                    )
                })}
            </select>
        </div>
        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
            {data?.map((song,i) => {
                return(
                    <SongCard
                    key={song.key}
                    song={song}
                    i={i}     
                    />
                )
            })}
        </div>
    </div>
);
};


export default Discover;
