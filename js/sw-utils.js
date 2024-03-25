

//Funcion que se ocupara de guardar en el cache dinamico

function actualizaCacheDinamico(dynamcicCache, req,res){


    if(res.ok){

       return caches.open(dynamcicCache).then(cache =>{

            cache.put( req , res.clone() );

            return res.clone();


        });

    }else{

        return res;
    }

}