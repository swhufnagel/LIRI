# LIRI

this CLI app uses node.js and axios to retrieve information from Spotify, OMDB or BandsinTown

<strong> How to use LIRI </strong>
1. type spotify-this-song [track-name] to search for a song and return its info (defaults to ace of base - the sign)
2. type concert-this [artist-name] to search for a band and return their concert dates
3. type movie-this [movie-name] to search for a movie and return its info (defaults to Mr. Nobody)
4. type do-what-it-says to take your search parameters from the random.txt file


<strong> How to start LIRI </strong>
1. Clone this repository
2. Open your terminal or bash and navigate to the `LIRI` folder
3. Enter the commands below to render results

 **Example 1**: Run the `concert-this` command
    
        node liri.js concert-this <name of artist or band>
    
    Output: The system will display an upcoming event. The system will also log the results in the log.txt file. 

**Example 2**: Run the `spotify-this-song` command
    
        node liri.js spotify-this-song <name of song>
    
    Output: The system will display a list of information associated with the song. The system will also log all the results in the log.txt file.


**Example 3**: Run the `movie-this` command
    
        node liri.js movie-this <name of movie>
    
    Output: The system will display information associated with the movie. The system will also log all the results in the log.txt file.
   
**Example 4**: Run the `do-what-it-says` command
        
        node liri.js do-what-it-says
        
    Output: The system will read the text in the random.txt file, and perform the command listed in the random.txt file. 
   

## TECHNOLOGIES USED
* Javascript
* Nodejs
* Node packages:
    * Node-Spotify-API
    * Axios
    * Moment
    * DotEnv
* APIs used:
    * Bands in Town
    * OMDB
* Git
* GitHub
