class UsersController < ApplicationController
    before_action :logged_in_user, only: [:show, :create, :new]
  def show
    @user = User.find(params[:id])
  end
    
  def new
  end
    
  def create
  end
end
