#!/bin/bash

echo '
  _   _            _                    _                     _ 
 | | | | ___ _ __ | |__   __ _  ___ ___| |_ _   _ ___  __   _/ |
 | |_| |/ _ | '_ \| '_ \ / _` |/ _ / __| __| | | / __| \ \ / | |
 |  _  |  __| |_) | | | | (_| |  __\__ | |_| |_| \__ \  \ V /| |
 |_| |_|\___| .__/|_| |_|\__,_|\___|___/\__|\__,_|___/   \_/ |_|
            |_|                                                 
'

# List applications to install
APPS=(
"arandr"
"base"
"base-devel"
"bashtop"
"cava"
"code"
"dhcp"
"dhcpcd"
"discord"
"dmidecode"
"efibootmgr"
"efitools"
"eza"
"feh"
"firefox"
"fish"
"git"
"grub"
"i3-wm"
"i3blocks"
"i3lock"
"i3status"
"iwd"
"kitty"
"lib32-mesa-amber"
"lib32-vulkan-intel"
"linux"
"linux-firmware"
"linux-headers"
"lsb-release"
"maim"
"mkinitcpio"
"nano"
"neofetch"
"neovim"
"networkmanager"
"os-prober"
"picom"
"pipewire"
"pipewire-alsa"
"pipewire-audio"
"pipewire-jack"
"pipewire-pulse"
"pipewire-roc"
"polybar"
"python-pip"
"python-pywal"
"python-virtualenv"
"realtime-privileges"
"reflector"
"rofi"
"sbctl"
"starship"
"vulkan-intel"
"vulkan-tools"
"wget"
"wireplumber"
"xdg-user-dirs"
"xf86-input-evdev"
"xf86-input-synaptics"
"xf86-input-vmmouse"
"xf86-input-void"
"xf86-video-amdgpu"
"xf86-video-ati"
"xf86-video-dummy"
"xf86-video-fbdev"
"xf86-video-intel"
"xf86-video-nouveau"
"xf86-video-openchrome"
"xf86-video-qxl"
"xf86-video-vesa"
"xf86-video-vmware"
"xf86-video-voodoo"
"xorg-bdftopcf"
"xorg-docs"
"xorg-font-util"
"xorg-fonts-100dpi"
"xorg-fonts-75dpi"
"xorg-fonts-encodings"
"xorg-iceauth"
"xorg-mkfontscale"
"xorg-server"
"xorg-server-common"
"xorg-server-devel"
"xorg-server-xephyr"
"xorg-server-xnest"
"xorg-server-xvfb"
"xorg-sessreg"
"xorg-setxkbmap"
"xorg-smproxy"
"xorg-twm"
"xorg-x11perf"
"xorg-xauth"
"xorg-xbacklight"
"xorg-xclock"
"xorg-xcmsdb"
"xorg-xcursorgen"
"xorg-xdpyinfo"
"xorg-xdriinfo"
"xorg-xev"
"xorg-xgamma"
"xorg-xhost"
"xorg-xinit"
"xorg-xinput"
"xorg-xkbcomp"
"xorg-xkbevd"
"xorg-xkbprint"
"xorg-xkbutils"
"xorg-xkill"
"xorg-xlsatoms"
"xorg-xlsclients"
"xorg-xmodmap"
"xorg-xpr"
"xorg-xprop"
"xorg-xrandr"
"xorg-xrdb"
"xorg-xrefresh"
"xorg-xset"
"xorg-xsetroot"
"xorg-xvinfo"
"xorg-xwayland"
"xorg-xwd"
"xorg-xwininfo"
"xorg-xwud"
"xterm"
"zathura"
)
FAILED_APPS =()

if [ "$(id -u)" -ne 0 ]; then
  echo "Error: Este script debe ejecutarse con privilegios de administrador."
  exit 1
fi

# Actualizar el sistema
echo "Actualizando el sistema..."
sudo pacman -Syu --noconfirm || { echo "Error en la actualización del sistema"; exit 1; }

if [ "$(id -u)" -ne 0 ]; then
  echo "Error: Este script debe ejecutarse con privilegios de administrador."
  exit 1
fi

for APP in "${APPS[@]}"; do
  if ! command -v "$APP" &> /dev/null; then
    echo "Installing $APP..."
    sudo pacman -S --needed --noconfirm "$APP" || { echo "Error installing $APP"; FAILED_APPS+=("$APP"); }
  else
    echo "$APP is already installed, skipping..."
  fi
done

if [ ${#FAILED_APPS[@]} -eq 0 ]; then
  echo "All applications were installed successfully."
else 
  echo "The following applications failed to install:"
  for FAILED_APP in "${FAILED_APPS[@]}"; do
    echo "- $FAILED_APP"
  done
fi

# Generate user dirs
echo "Creating user directories..."

# List of directories to check and create if they don't exist
USER_DIRECTORIES=(
  "Desktop"
  "Downloads"
  "Pictures"
  "Documents"
  "Music"
  "Videos"
)

for DIR in "${USER_DIRECTORIES[@]}"; do
  DIR_PATH="$HOME/$DIR"
  if [ ! -d "$DIR_PATH" ]; then
    xdg-user-dirs-update --set "$DIR" "$DIR_PATH"
    echo "$DIR directory created or updated."
  else
    echo "$DIR directory already exists, skipping."
  fi
done

# Restore Dotfiles
echo "Restoring backup files..."
BACKUP_PATH="$HOME/Dotfiles/Hephaestus/BackUp/"

if [ -d "$BACKUP_PATH" ]; then
    cp -r "$BACKUP_PATH"/* "$HOME/.config/" && echo "Restoration completed." || { echo "Error restoring backup files"; exit 1; }
fi

# Restore xinitrc
echo "Restoring xinitrc file from backup..."
BACKUP_PATH="$HOME/Dotfiles/Hephaestus/xInit/"

if [ -d "$BACKUP_PATH" ]; then
    cp "$BACKUP_PATH/xinitrc" "$HOME/.xinitrc" || { echo "Error restoring xinitrc"; exit 1; }
    echo "Restoration completed."
else
    echo "Error: Backup folder not found."
    exit 1
fi

# Final message
echo "The script ran successfully. Ready to use!"
