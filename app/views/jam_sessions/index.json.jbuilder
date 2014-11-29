json.array!(@jam_sessions) do |jam_session|
  json.extract! jam_session, :id
  json.url jam_session_url(jam_session, format: :json)
end
