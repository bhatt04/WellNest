'use client'
import { useState } from 'react'
import { Heart, Target, Award, Edit2, Save } from 'lucide-react'

export default function WellnessProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: '',
    gender: '',
    age: '',
    location: '',
    bio: '',
    wellnessGoals: '',
    wellnessInterests: [''],
    favoriteInstructors: [''],
    achievements: [''],
  })

  const toggleEdit = () => setIsEditing(!isEditing)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleArrayInputChange = (e, field) => {
    const values = e.target.value.split(',').map(item => item.trim())
    setUserInfo(prev => ({ ...prev, [field]: values }))
  }

  return (
    <div className="min-h-screen bg-emerald-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="relative h-48 bg-gradient-to-r from-green-400 to-green-600">
            <div className="absolute bottom-0 left-0 w-full p-6 bg-black bg-opacity-50 text-white">
              <h1 className="text-3xl font-bold">
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={userInfo.name}
                    onChange={handleInputChange}
                    className="bg-transparent border-b w-full"
                    placeholder="Enter your name"
                  />
                ) : userInfo.name || 'Name not set'}
              </h1>
              <p className="text-green-200">
                {isEditing ? (
                  <input
                    type="text"
                    name="location"
                    value={userInfo.location}
                    onChange={handleInputChange}
                    className="bg-transparent border-b"
                    placeholder="Enter your location"
                  />
                ) : userInfo.location || 'Location not set'}
              </p>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-end mb-4">
              <button
                onClick={toggleEdit}
                className="flex items-center px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
              >
                {isEditing ? (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save Profile
                  </>
                ) : (
                  <>
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </>
                )}
              </button>
            </div>
            
            {/* Wellness Info */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-2 flex items-center">
                <Heart className="w-6 h-6 mr-2 text-green-500" />
                Wellness Information
              </h2>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={userInfo.bio}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  rows={4}
                  placeholder="Share something about your wellness journey..."
                />
              ) : (
                <p className="text-gray-700">{userInfo.bio || 'No bio available'}</p>
              )}
            </section>

            {/* Goals and Interests */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-2 flex items-center">
                <Target className="w-6 h-6 mr-2 text-green-500" />
                Wellness Goals & Interests
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-1">Wellness Goals:</h3>
                  {isEditing ? (
                    <input
                      type="text"
                      name="wellnessGoals"
                      value={userInfo.wellnessGoals}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter your wellness goals"
                    />
                  ) : (
                    <p>{userInfo.wellnessGoals || 'No wellness goals set'}</p>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Interests:</h3>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userInfo.wellnessInterests.join(', ')}
                      onChange={(e) => handleArrayInputChange(e, 'wellnessInterests')}
                      className="w-full p-2 border rounded"
                      placeholder="Enter your wellness interests, separated by commas"
                    />
                  ) : (
                    <ul className="list-disc list-inside">
                      {userInfo.wellnessInterests.length ? (
                        userInfo.wellnessInterests.map((interest, index) => (
                          <li key={index}>{interest}</li>
                        ))
                      ) : (
                        <li>No interests added</li>
                      )}
                    </ul>
                  )}
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-2 flex items-center">
                <Award className="w-6 h-6 mr-2 text-green-500" />
                Achievements
              </h2>
              {isEditing ? (
                <textarea
                  value={userInfo.achievements.join('\n')}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, achievements: e.target.value.split('\n') }))}
                  className="w-full p-2 border rounded"
                  rows={4}
                  placeholder="List your achievements, one per line"
                />
              ) : (
                <ul className="list-disc list-inside">
                  {userInfo.achievements.length ? (
                    userInfo.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))
                  ) : (
                    <li>No achievements added</li>
                  )}
                </ul>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
