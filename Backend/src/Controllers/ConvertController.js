const ytdl = require('ytdl-core');

module.exports = {
    
    async mp3(req, res){

        const { search } = req.query;

        const idvih = `${search}`.replace('https://www.youtube.com/watch?v=', '') || ('https://youtu.be/', '')
        try{

            
            const info = await ytdl.getInfo(idvih);
            res.setHeader('Content-disposition', `attachment; filename=${info.title.split(' ').join('-')}.mp3`);
            res.setHeader('Content-type', 'audio/mp3')
            
            await ytdl(idvih, {filter: 'audioonly', quality: 'highest'}).pipe(res)
        
    }catch(err){
        return res.status(404).json({err: 'Not Found'})
    }
        
    },

    async mp4(req, res){
        const { search } = req.query;

        const idvih = `${search}`.replace('https://www.youtube.com/watch?v=', '') || ('https://youtu.be/', '')
        try{
            const info = await ytdl.getInfo(idvih)
            res.setHeader('Content-disposition', `attachment; filename=${info.title.split(' ').join('-')}.mp4`);
            res.setHeader('Content-type', 'video/mp4');        
            ytdl.chooseFormat(info.formats, {quality: 'highest'})
            await ytdl(idvih).pipe(res)
        
             }catch(error){
            return res.status(404).json({error: "404 Not Found"});
        }
    }

}