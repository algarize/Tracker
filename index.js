//
// Copyright [2020] [Jakob de Guzman]
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();

client.on('ready', function () {

	console.log('Bot Ready!');

});

client.on("presenceUpdate", (oldMember, newMember) => {

	if (client.guilds.get('608349584623796249')
		.members.get(newMember.user.id)
		.roles.has('658392368117973045')) {

		if (newMember.presence.game != null && oldMember.presence.game != null) {

			if (newMember.presence.game.state != null && oldMember.presence.game.state != null && (newMember.presence.game.name == 'Custom Status' || oldMember.presence.game.name == 'Custom Status')) {

				if ((newMember.presence.game.state.includes('discord.gg/2007gp') || oldMember.presence.game.state.includes('discord.gg/2007gp')) && oldMember.presence.game.state != newMember.presence.game.state) {

					const embed = new Discord.RichEmbed()
						.setDescription(`\`${newMember.user.tag}\`'s changed from \`${oldMember.presence.game.state}\` to \`${newMember.presence.game.state}\``)
						.setColor(config.green)
						.setAuthor(newMember.user.tag, newMember.user.avatarURL)
						.setFooter(Date())
						.setTimestamp(Date.now());

					if (oldMember.presence.game.state.includes('discord.gg/2007gp')) embed.setColor(config.red);

					client.guilds.get('608349584623796249')
						.channels.get('667952159077433396')
						.send(embed);

				}

			} else {

				if (oldMember.presence.game.state != null && oldMember.presence.game.name == 'Custom Status') {

					const embed = new Discord.RichEmbed()
						.setDescription(`\`${newMember.user.tag}\`'s changed from \`${oldMember.presence.game.state}\` to \`offline\``)
						.setColor(config.gray)
						.setAuthor(newMember.user.tag, newMember.user.avatarURL)
						.setFooter(Date())
						.setTimestamp(Date.now());
					client.guilds.get('608349584623796249')
						.channels.get('667952159077433396')
						.send(embed);

				}

				if (newMember.presence.game.state != null && newMember.presence.game.name == 'Custom Status') {

					const embed = new Discord.RichEmbed()
						.setDescription(`\`${newMember.user.tag}\`'s changed from \`offline\` to \`${newMember.presence.game.state}\``)
						.setColor(config.green)
						.setAuthor(newMember.user.tag, newMember.user.avatarURL)
						.setFooter(Date())
						.setTimestamp(Date.now());
					client.guilds.get('608349584623796249')
						.channels.get('667952159077433396')
						.send(embed);

				}

			}

		} else {

			if (oldMember.presence.game != null) {

				if (oldMember.presence.game.state != null && oldMember.presence.game.name == 'Custom Status') {

					if (oldMember.presence.game.state.includes('discord.gg/2007gp')) {

						const embed = new Discord.RichEmbed()
							.setDescription(`\`${newMember.user.tag}\`'s changed from \`${oldMember.presence.game.state}\` to \`offline\``)
							.setColor(config.gray)
							.setAuthor(newMember.user.tag, newMember.user.avatarURL)
							.setFooter(Date())
							.setTimestamp(Date.now());
						client.guilds.get('608349584623796249')
							.channels.get('667952159077433396')
							.send(embed);

					}

				}

			}

			if (newMember.presence.game != null) {

				if (newMember.presence.game.state != null && newMember.presence.game.name == 'Custom Status') {

					if (newMember.presence.game.state.includes('discord.gg/2007gp')) {

						const embed = new Discord.RichEmbed()
							.setDescription(`\`${newMember.user.tag}\`'s changed from \`offline\` to \`${newMember.presence.game.state}\``)
							.setColor(config.green)
							.setAuthor(newMember.user.tag, newMember.user.avatarURL)
							.setFooter(Date())
							.setTimestamp(Date.now());
						client.guilds.get('608349584623796249')
							.channels.get('667952159077433396')
							.send(embed);

					}

				}

			}

		}

	}

});

client.login(config.token);
