class SessionsController < ApplicationController
  def new
  end
    
  def create
    auth = request.env["omniauth.auth"]
    user = User.find_by_provider_and_uid(auth["provider"], auth["uid"]) || User.create_with_omniauth(auth)
    log_in user
    remember user
    redirect_to user

               
#      user = User.find_by(email: params[:session][:email].downcase)
#      if user && user.authenticate(params[:session][:password])
#        log_in user
#        params[:session][:remember_me] == '1' ? remember(user) : forget(user)
#        remember user
#        redirect_to user
#      else
#        flash.now[:danger] = 'Invalid email/password combination'  
#        render 'new'
#      end
  end
    
  def destroy
    log_out if logged_in?
    session[:user_id] = nil
    flash[:success] = 'Signed out'
    redirect_to root_url
  end
end
