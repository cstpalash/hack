import Images from '../constants/Images';
export default [
	{ 
		rank : 1,
		email: "palash.roy@db.com", 
		name: "Palash Roy", 
		country: "India", 
		city: "Pune", 
		pic: Images.Picture.Palash, 
		coins: 4500,
		challenges: 15,
		leading: 5,
		activeChallenges : [
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
					name : 'Tree planting',
					desc : 'Trees contribute to the global environment by improving air quality, conserving water, preserving soil, supporting wildlife.',
					pic : Images.Challenge.TreePlanting,
					measure : {
					  unit : "1 tree",
					  leaf : 10
					}
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
			        name : 'Using public transport',
			        desc : 'Using public transport can significantly reduce carbon emissions, we all should avail where efficient.',
			        pic : Images.Challenge.PublicTransport,
			        measure : {
			          unit : "1 km",
			          leaf : 1
			        }
			      },
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
			        name : 'Cycling',
			        desc : 'Cycling could reduce carbon emissions by a substantial amount, having footprint 0.002% of a car',
			        pic : Images.Challenge.Cycling,
			        measure : {
			          unit : "1 km",
			          leaf : 1
			        }
			      },
			}
		]
	},
	{ 
		rank : 2,
		email: "suraj-b.kumar@db.com", 
		name: "Suraj Kumar", 
		country: "India", 
		city: "Pune", 
		pic: Images.Picture.Suraj, 
		coins: 4320,
		challenges: 19,
		leading: 4,
		activeChallenges : [
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
			        name : 'Using public transport',
			        desc : 'Using public transport can significantly reduce carbon emissions, we all should avail where efficient.',
			        pic : Images.Challenge.PublicTransport,
			        measure : {
			          unit : "1 km",
			          leaf : 1
			        }
			      },
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
			        name : 'Cycling',
			        desc : 'Cycling could reduce carbon emissions by a substantial amount, having footprint 0.002% of a car',
			        pic : Images.Challenge.Cycling,
			        measure : {
			          unit : "1 km",
			          leaf : 1
			        }
			      },
			}
		]
	},
	{ 
		rank : 3,
		email: "maitri.ronak-gupta@db.com", 
		name: "Maitri Gupta", 
		country: "India", 
		city: "Pune", 
		pic: Images.Picture.Maitri, 
		coins: 3995,
		challenges: 13,
		leading: 3,
		activeChallenges : [
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
					name : 'Tree planting',
					desc : 'Trees contribute to the global environment by improving air quality, conserving water, preserving soil, supporting wildlife.',
					pic : Images.Challenge.TreePlanting,
					measure : {
					  unit : "1 tree",
					  leaf : 10
					}
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
			        name : 'Using public transport',
			        desc : 'Using public transport can significantly reduce carbon emissions, we all should avail where efficient.',
			        pic : Images.Challenge.PublicTransport,
			        measure : {
			          unit : "1 km",
			          leaf : 1
			        }
			      },
			},
		]
	},
	{ 
		rank : 4,
		email: "pankaj.hasija@db.com", 
		name: "Pankaj Hasija", 
		country: "India", 
		city: "Pune", 
		pic: Images.Picture.Pankaj, 
		coins: 3540,
		challenges: 10,
		leading: 4,
		activeChallenges : [
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
					name : 'Tree planting',
					desc : 'Trees contribute to the global environment by improving air quality, conserving water, preserving soil, supporting wildlife.',
					pic : Images.Challenge.TreePlanting,
					measure : {
					  unit : "1 tree",
					  leaf : 10
					}
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
			        name : 'Cycling',
			        desc : 'Cycling could reduce carbon emissions by a substantial amount, having footprint 0.002% of a car',
			        pic : Images.Challenge.Cycling,
			        measure : {
			          unit : "1 km",
			          leaf : 1
			        }
			      },
			}
		]
	},
	{ 
		rank : 5,
		email: "shyamu.sharma@db.com", 
		name: "Shyamu Sharma", 
		country: "India", 
		city: "Pune", 
		pic: Images.Picture.Shyamu, 
		coins: 2990,
		challenges: 8,
		leading: 2,
		activeChallenges : [
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
					name : 'Tree planting',
					desc : 'Trees contribute to the global environment by improving air quality, conserving water, preserving soil, supporting wildlife.',
					pic : Images.Challenge.TreePlanting,
					measure : {
					  unit : "1 tree",
					  leaf : 10
					}
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
			        name : 'Using public transport',
			        desc : 'Using public transport can significantly reduce carbon emissions, we all should avail where efficient.',
			        pic : Images.Challenge.PublicTransport,
			        measure : {
			          unit : "1 km",
			          leaf : 1
			        }
			      },
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
			        name : 'Cycling',
			        desc : 'Cycling could reduce carbon emissions by a substantial amount, having footprint 0.002% of a car',
			        pic : Images.Challenge.Cycling,
			        measure : {
			          unit : "1 km",
			          leaf : 1
			        }
			      },
			}
		]
	},
];