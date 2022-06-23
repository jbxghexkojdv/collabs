import chatData from './chat.json' assert {type: 'json'};

function User(name = "Anonymous Dab", username = Math.random(), pfpLink = "", desc = "", email = "noreply@youtube.com", password = "jbxghexkojdv")
{
  this.name = name;
  this.pfp = pfpLink;
  this.profile = desc;
  this.email = email;
  this.pw = password;
  this.friends = [];
  this.isDev = false;
}

function Message(userId, text = "I somehow sent no message:)", date = new Date("Apr 20, 1969 13:37"))
{
  this.user = userId;
  this.text = text;
  this.time = date;
}

function Chat(ownerId)
{
  this.owner = ownerId;
  this.messages = [];
  this.people = [ownerId];
}
