import React from 'react'

function Card({username, btnText="Click Me"}) {
  return (
    <div>
                        <div className="flex flex-col rounded-xl  p-4"
                              style={{
                                border: '0.88px solid',
                        
                                backdropFilter: 'saturate(180%) blur(14px)',
                                background: ' #ffffff0d',
                              }}
                        >
                        <div>
                          <img
                            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
                            alt="nft-gif"
                            width="400"
                            height="400"
                            className="rounded-xl"
                          />
                </div>
                <div className="flex flex-col  rounded-b-xl py-4 ">
                  <div className="flex justify-between">
                    <h1 className="font-RubikBold ">{username}</h1>
                    <h1 className="font-bold font-RubikBold">{btnText}</h1>
                  </div>
                  <div className="flex  justify-between font-mono">
                    <p>#345</p>
                    <p>0.01</p>
                  </div>
                  <div>
                    <button className="relative block group ">
                      <span className="absolute inset-0 border-2 border-white border-dashed rounded-lg"></span>
                          <div className="transition bg-black border-2 border-white rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
                            <div className="p-2 ">
                              <p className="text-xl font-outerSans font-medium">{btnText}</p>
                          </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Card