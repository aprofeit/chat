class ApplicationController < ActionController::Base
  def home
    render plain: 'Hello, world!'
  end
end
