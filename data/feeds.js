
import Images from '../constants/Images';
export default [
	{
      id : 1,
      type : 'challenge',
      by : {
        name : 'Palash Roy',
        pic : Images.Picture.Palash,
        createdOn : '10 Oct 2019 at 10:20am',
      },
      start : null,
      end : '31 Dec 2019',
      idea : {
        id : 1,
        name : 'Plant a tree',
        desc : 'Trees contribute to the global environment by improving air quality, conserving water, preserving soil, supporting wildlife.',
        pic : Images.Challenge.TreePlanting,
        measure : {
          unit : "1 tree",
          leaf : 10
        }
      },
      stats : {
        subscribed : 150,
        isSubscribedByMe : false,
        winningProbability : 86,
        leaders : [
          {
            name : 'Shyamu',
            pic : Images.Picture.Shyamu,
            coins : 200
          },
          {
            name : 'Pankaj',
            pic : Images.Picture.Pankaj,
            coins : 180
          },
          {
            name : 'Maitri',
            pic : Images.Picture.Maitri,
            coins : 150
          }
        ]
      }
    },
    {
      id : 2,
      type : 'challenge',
      by : {
        name : 'Maitri Gupta',
        pic : Images.Picture.Maitri,
        createdOn : '10 Oct 2019 at 04:35pm',
      },
      start : null,
      end : '31 Mar 2020',
      idea : {
        id : 2,
        name : 'Use public transport to office',
        desc : 'Using public transport can significantly reduce carbon emissions, we all should avail where efficient.',
        pic : Images.Challenge.PublicTransport,
        measure : {
          unit : "1 km",
          leaf : 1
        }
      },
      stats : {
        subscribed : 950,
        isSubscribedByMe : true,
        winningProbability : 62,
        leaders : [
          {
            name : 'Mayur',
            pic : Images.Picture.Mayur,
            coins : 750
          },
          {
            name : 'Suraj',
            pic : Images.Picture.Suraj,
            coins : 220
          },
          {
            name : 'Pankaj',
            pic : Images.Picture.Pankaj,
            coins : 210
          }
        ]
      }
    },
    {
      id : 3,
      type : 'challenge',
      by : {
        name : 'Shyamu Sharma',
        pic : Images.Picture.Shyamu,
        createdOn : '10 Oct 2019 at 11:30am',
      },
      start : null,
      end : '01 Jan 2020',
      idea : {
        id : 3,
        name : 'Cycling around',
        desc : 'Cycling could reduce carbon emissions by a substantial amount, having footprint 0.002% of a car',
        pic : Images.Challenge.Cycling,
        measure : {
          unit : "1 km",
          leaf : 1
        }
      },
      stats : {
        subscribed : 54,
        isSubscribedByMe : true,
        winningProbability : 99,
        leaders : [
          {
            name : 'Palash',
            pic : Images.Picture.Palash,
            coins : 350
          },
          {
            name : 'Pankaj',
            pic : Images.Picture.Pankaj,
            coins : 180
          },
          {
            name : 'Maitri',
            pic : Images.Picture.Maitri,
            coins : 80
          }
        ]
      }
    },
    {
      id : 4,
      type : 'challenge',
      by : {
        name : 'Suraj Kumar',
        pic : Images.Picture.Suraj,
        createdOn : '10 Oct 2019 at 02:30pm',
      },
      start : null,
      end : '31 Jan 2020',
      idea : {
        id : 4,
        name : 'Use stairs',
        desc : 'Using stairs and avoiding escalator reduces carbon emissions by a substantial amount.',
        pic : Images.Challenge.StairClimbing,
        measure : {
          unit : "20 steps",
          leaf : 1
        }
      },
      stats : {
        subscribed : 45,
        isSubscribedByMe : false,
        winningProbability : 54,
        leaders : [
          {
            name : 'Mayur',
            pic : Images.Picture.Mayur,
            coins : 350
          },
          {
            name : 'Pankaj',
            pic : Images.Picture.Pankaj,
            coins : 180
          },
          {
            name : 'Maitri',
            pic : Images.Picture.Maitri,
            coins : 80
          }
        ]
      }
    },
    {
      id : 5,
      type : 'challenge',
      by : {
        name : 'Suraj Kumar',
        pic : Images.Picture.Suraj,
        createdOn : '10 Oct 2019 at 03:30pm',
      },
      start : null,
      end : '31 Mar 2020',
      idea : {
        id : 4,
        name : 'Bring plastic products',
        desc : 'Bring plastic goods in office as much you can, we shall process to recycle',
        pic : Images.Challenge.RecyclePlastic,
        measure : {
          unit : "500 gm",
          leaf : 1
        }
      },
      stats : {
        subscribed : 130,
        isSubscribedByMe : false,
        winningProbability : 85,
        leaders : [
          {
            name : 'Maitri',
            pic : Images.Picture.Maitri,
            coins : 450
          },
          {
            name : 'Mayur',
            pic : Images.Picture.Mayur,
            coins : 350
          },
          {
            name : 'Pankaj',
            pic : Images.Picture.Pankaj,
            coins : 180
          },
          
        ]
      }
    }
]