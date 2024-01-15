#!/bin/bash

# List applications to install
apss=(
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

# Install each app
for app in "${apps[@]}"; do
  sudo pacman -S --needed --noconfirm "$app"
done

#Gen user dirs
echo"CREATE USER DIRS"
xdg-user-dirs-update

# Ruta a la carpeta de respaldo

echo "RESTORING DOTFILES"
ruta_respaldo="$HOME/Hephaestus/BackUp"

# Verificar si la carpeta de respaldo existe
if [ -d "$ruta_respaldo" ]; then
    # Restaurar archivos desde el respaldo
    echo "Restaurando archivos de respaldo..."
    cp -r "$ruta_respaldo"/* "$HOME/.config/"
    echo "Restauración completada."
else
    echo "Error: No se encontró la carpeta de respaldo."
    exit 1
fi

echo "RESTORE XINITRC"
# Ruta a la carpeta de respaldo
ruta_respaldo="$HOME/Hephaestus/xInit"

# Verificar si la carpeta de respaldo existe
if [ -d "$ruta_respaldo" ]; then
    # Restaurar el archivo xinitrc desde el respaldo
    echo "Restaurando el archivo xinitrc desde el respaldo..."
    cp "$ruta_respaldo/xinitrc" "$HOME/.xinitrc"
    echo "Restauración completada."
else
    echo "Error: No se encontró la carpeta de respaldo."
    exit 1
fi

# Message
echo "I'm holding on to what I know
And what I know, I must let go..."



