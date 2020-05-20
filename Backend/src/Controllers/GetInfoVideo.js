const ytdl = require('ytdl-core');

module.exports = {
    async info(req,res){
        const {search} = req.query;
        try{
        //const video_id = `${search}`.replace('https://www.youtube.com/watch?v=','') || ('https://youtu.be/', '')
        const video_id = ytdl.getVideoID(search)
        const thumbnail = `https://img.youtube.com/vi/${video_id}/mqdefault.jpg`;
            const info = await ytdl.getInfo(video_id)

                const { title, length_seconds,} = info;

                const hr = Math.floor(length_seconds / 60 / 60);
                const min = Math.floor(length_seconds / 60);
                const sec = Math.floor(length_seconds % 60);
                
                
                const time = () => {
                    if(hr>0){
                        return hr+':'+min+':'+sec
                    }else if(hr<1 && min>0){
                    return min+':'+sec
                }else {
                    return sec;
                }



                 }
                return res.json({thumbnail_url: thumbnail, title, time: time(), search})
                
            

        }catch(error) {
            return res.status(404).json({error: "Video Não Encontrado"})
        }
    }
}