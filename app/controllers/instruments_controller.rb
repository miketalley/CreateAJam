class InstrumentsController < ApplicationController
  before_action :set_instrument, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @instruments = Instrument.all
    respond_with(@instruments)
  end

  def show
    respond_with(@instrument)
  end

  def new
    @instrument = Instrument.new
    respond_with(@instrument)
  end

  def edit
  end

  def create
    @instrument = Instrument.new(instrument_params)
    @instrument.save
    respond_with(@instrument)
  end

  def update
    @instrument.update(instrument_params)
    respond_with(@instrument)
  end

  def destroy
    @instrument.destroy
    respond_with(@instrument)
  end

  private
    def set_instrument
      @instrument = Instrument.find(params[:id])
    end

    def instrument_params
      params[:instrument]
    end
end
