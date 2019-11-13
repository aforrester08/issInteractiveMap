# issInteractiveMap

This is a 4 person group project set by CodeClan, completed in 4 days. It uses the Vue framework, Leaflet the JS map libary
and mongoDB for the serverside. The brief was to create a interactive educational app so we decided to use an API from 
open-notify.org to create an interactive map that tracks the position of the International Space Station above the earth.

We decided to use leaflet to create our map element as it's simple to import and can choose from a range of open source tiles.
The api data was fetched in a function and once the latitude and longitude were isolated, they were 
used to place a leaflet marker. The fetch function was called again every 3 seconds and the updated co-ordinates pushed to
the marker. This created a marker on the map that updated live and represented the position of the ISS. We added clickable
stationary markers to the map for more information about the different space agencies.

# Running the App

Direct into the 'client' directory  and run 'npm install' to install the relevent packages, then in run 'npm run serve'. 
After that go to the 'server' directory and 'npm install' here too, then start mongoDB by typing 'mongod', run
'npm run server:dev' and finally 'npm run seeds'. This will set up the servers and databases, the app will now be accessible 
from localhost:8080.
