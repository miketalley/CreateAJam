class JamSessionsController < ApplicationController
  before_action :set_jam_session, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @jam_sessions = JamSession.all
    respond_with(@jam_sessions)
  end

  def show
    respond_with(@jam_session)
  end

  def new
    @jam_session = JamSession.new
    respond_with(@jam_session)
  end

  def edit
  end

  def create
    @jam_session = JamSession.new(jam_session_params)
    @jam_session.save
    respond_with(@jam_session)
  end

  def update
    @jam_session.update(jam_session_params)
    respond_with(@jam_session)
  end

  def destroy
    @jam_session.destroy
    respond_with(@jam_session)
  end

  private
    def set_jam_session
      @jam_session = JamSession.find(params[:id])
    end

    def jam_session_params
      params[:jam_session]
    end
end
