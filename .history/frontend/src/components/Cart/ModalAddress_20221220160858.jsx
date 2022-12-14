import React, { useState } from 'react'
import useLocationForm from "./useLocationForm";
import Select from "react-select";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../../sass/cart/checkoutCart.scss'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addAddress } from '../../redux/address/addressSlice';
const ModalAddress = ({ showAddressItem, setShowAddressItem }) => {
    const handleClickAddressItem = () => {
        setShowAddressItem(false)
    }

    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')

    const dispatch = useDispatch()

    const { handleSubmit, register } = useForm()

    const {
        state,
        onCitySelect,
        onDistrictSelect,
        onWardSelect,
        onSubmit
      } = useLocationForm(false);
    
      const {
        cityOptions,
        districtOptions,
        wardOptions,
        selectedCity,
        selectedDistrict,
        selectedWard
      } = state;

    // console.log(selectedCity)
    
      const handleOnSubmit = (e) =>{
            e.preventDefault()
            console.log(selectedCity.label)
            console.log(selectedDistrict.label)
            console.log(selectedWard.label)
            console.log(e.target.name.value)
            const data = {
                name: e.target.name.value,
                phone: e.target.phone.value,
                addres: e.target.addres.value + ' ,' + selectedWard.label + ' ,' + selectedDistrict.label + ' ,' + selectedCity.label
            }

            console.log(data)

            // dispatch(addAddress(data))
      }

      return (
        <Modal
            open={showAddressItem}
            onClose={handleClickAddressItem}
            classNames={{
                overlay: 'customOverlay',
                modal: 'custom-modal-detail-order',
            }}
        >

            <div className="form-address">
                <form
                    onSubmit={handleOnSubmit}
                    
                    >
                    <div className="select-group">

                    <input name='name' type="text" placeholder='Nh???p h??? t??n'
                            onChange={(e) => setName(e.target.value)}     />
                    <input 
                            style={{
                                marginBottom: '20px'
                            }}
                            name='phone' type="text" placeholder='Nh???p s??? ??i???n tho???i' />

                        <Select
                        name="cityId"
                        key={`cityId_${selectedCity?.value}`}
                        isDisabled={cityOptions.length === 0}
                        options={cityOptions}
                        onChange={(option) => onCitySelect(option)}
                        placeholder="T???nh/Th??nh"
                        defaultValue={selectedCity}
                        />

                        <br />

                        <Select
                        name="districtId"
                        key={`districtId_${selectedDistrict?.value}`}
                        isDisabled={districtOptions.length === 0}
                        options={districtOptions}
                        onChange={(option) => onDistrictSelect(option)}
                        placeholder="Qu???n/Huy???n"
                        defaultValue={selectedDistrict}
                        />
                        <br />
                        <Select
                        name="wardId"
                        key={`wardId_${selectedWard?.value}`}
                        isDisabled={wardOptions.length === 0}
                        options={wardOptions}
                        placeholder="Ph?????ng/X??"
                        onChange={(option) => onWardSelect(option)}
                        defaultValue={selectedWard}
                        />

                        <input name='address' type="text" placeholder='Nh???p ?????a ch??? c??? th???' />
                    </div>

                    <button
                        type="submit"
                    >
                        X??c nh???n
                    </button>
                    </form>
            </div>
        </Modal >
      )
}

export default ModalAddress
